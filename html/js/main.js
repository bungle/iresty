var templates = {
    posts: {
        post:  _.template('<li class=uk-text-large><%- sent %> <span class=nick-wrap>&lt;<span class=<%- self ? "nick-self" : "nick" %>><%- nick %></span>&gt;</span> <%= linkifyStr(post) %></li>'),
        join:  _.template('<li class=uk-text-success><%- sent %> <span class=uk-text-muted>-<span class=uk-text-danger>!</span>-</span> <%- nick %> joined the channel.</li>'),
        part:  _.template('<li class=uk-text-muted><%- sent %> <span class=uk-text-muted>-<span class=uk-text-danger>!</span>-</span> <%- nick %> left the channel.</li>'),
        exit:  _.template('<li class=uk-text-danger><%- senttime() %> <span class=uk-text-muted>-<span class=uk-text-danger>!</span>-</span> connection to the server was closed.</li>'),
        posts: _.template('<li class=uk-text-success><%- senttime() %> <span class=uk-text-muted>-<span class=uk-text-danger>!</span>-</span> previously talked on the channel.</li>' +
                          '<% _.forEach(posts, function(post) { print(templates.posts.post(fields(post))) }); %>')
    },
    nicks: {
        join:  _.template('<li><a><%- nick %></a></li>'),
        nicks: _.template('<% _.forEach(nicks, function(nick) { print(templates.nicks.join({ nick: nick })) }); %>')
    }
};

var scroll = {
    nicks: true,
    posts: true,
    init: function () {
        var c = $('#posts').parent();
        var n = $('#nicks').parent();
        c.nanoScroller();
        n.nanoScroller();
        c.bind('update', scroll.update);
        n.bind('update', scroll.update);
        c.bind('scrollend', scroll.end);
        n.bind('scrollend', scroll.end);
    },
    id: function(e) {
        return $(e.target).children().first().prop('id');
    },
    flash: function (e) {
        e.parent().nanoScroller().nanoScroller({ flash: true });
    },
    bottom: function (e) {
        e.parent().nanoScroller().nanoScroller({ flash: true });
        if (scroll[e.prop('id')]) {
            e.parent().nanoScroller({ scroll: 'bottom' });
        }
    },
    update: function(e, v) {
        if (v.direction == 'up') {
            scroll[scroll.id(e)] = false;
        }
   },
    end: function(e) {
        scroll[scroll.id(e)] = true;
    }
};

var progress = {
    start: function() {
        NProgress.start();
    },
    stop: function() {
        NProgress.done();
    }
};

var socket;

var websocket = {
    connect: function() {
        if (websocket.dead()) {
            socket = new WebSocket('ws://iresty.dev:8000/');
            socket.onopen = websocket.open;
            socket.onmessage = websocket.message;
            socket.onclose = websocket.close;
        }
    },
    open: function() {
        chat.join();
        chat.toggle();
    },
    message: function(e) {
        var m = JSON.parse(e.data);
        if (m && m.type) {
            var temp = templates.posts[m.type];
            if (temp) {
                if (m.type !== "posts") {
                    fields(m);
                }
                var posts = $('#posts');
                posts.append(temp(m));
                scroll.bottom(posts);
            }
            var nicks = $('#nicks');
            if (m.type === "join" || m.type === "part") {
                nicks.find('a:contains(' + m.nick + ')').parent().remove();
            }
            temp = templates.nicks[m.type];
            if (temp) {
                nicks.append(temp(m));
            }
            chat.sort();
        }
    },
    close: function() {
        chat.toggle();
        var posts = $('#posts');
        posts.append(templates.posts.exit());
        scroll.bottom(posts);
    },
    alive: function() {
        return !_.isUndefined(socket) && !_.isNull(socket) && socket.readyState === WebSocket.OPEN;
    },
    dead: function() {
        return _.isUndefined(socket) || _.isNull(socket) || socket.readyState === WebSocket.CLOSED;
    },
    send: function(message) {
        if (websocket.alive()) {
            return socket.send(message);
        } else {
            websocket.connect();
            return _.delay(websocket.send, 100, message);
        }
    },
    disconnect: function() {
        if (websocket.alive()) {
            chat.part();
            socket.close();
        }
    },
    toggle: function() {
        if (websocket.alive()) {
            websocket.disconnect();
        } else {
            websocket.connect();
        }
    }
};
var chat = {
    init: function() {
        scroll.init();
        websocket.connect();
        $('#exit').hammer().bind('tap', websocket.toggle);
        $('#post').focus();
        $('#autocomplete').on('selectitem.uk.autocomplete', function(e, data){
            $("#autocomplete").find('.uk-autocomplete-results').remove();
            var post = $('#post');
            var val = post.val();
            var dvl = data.value;
            var i = val.lastIndexOf(':');
            if (i > -1) {
                val = val.substring(0, i);
            }
            var nvl = val + dvl + ' ';
            _.defer(function() {
                post.val(nvl).focus();
            });
        });
    },
    join: function() {
        var n = $('#nick');
        websocket.send(JSON.stringify({
            type: 'join',
            nick: n.val()
        }));
    },
    part: function() {
        var n = $('#nick');
        websocket.send(JSON.stringify({
            type: 'part',
            nick: n.val()
        }));
    },
    post: function(e) {
        e.preventDefault();
        var m = $('#post');
        if (_.trim(m.val()) === '') return;
        var s = $('#send');
        var n = $('#nick');
        progress.start();
        s.prop('disabled', true);
        n.prop('disabled', true);
        m.prop('disabled', true);
        _.defer(function() {
            websocket.send(JSON.stringify({
                type: 'post',
                nick: n.val(),
                post: m.val()
            }));
            s.prop('disabled', false);
            n.prop('disabled', false);
            m.prop('disabled', false).val('').focus();
            progress.stop();
        });
    },
    sort: function() {
        var nicks = $('#nicks');
        nicks.html(
            nicks.children('li').sort(function (a, b) {
                return $(a).text().toUpperCase().localeCompare($(b).text().toUpperCase());
            })
        );
    },
    toggle: function() {
        $('#nicks').empty();
        var exit = $('#exit');
        if (websocket.alive()) {
            exit.removeClass('uk-button-success').addClass('uk-button-danger').text('Disconnect');
        } else {
            exit.removeClass('uk-button-danger').addClass('uk-button-success').text('Connect');
        }
    }
};

var pjax = {
    start: function() {
        progress.start();
    },
    end: progress.stop,
    send: function(e) {
        $.pjax.submit(e, '#main');
    }
};

function fields(m) {
    if (m.time) {
        m.time = new Date(m.time);
        m.hour = m.time.getHours();
        m.mins = m.time.getMinutes();
        m.sent = (m.hour < 10 ? '0' + m.hour : m.hour) + ':' + (m.mins < 10 ? '0' + m.mins : m.mins);
    } else {
        m.time = '';
        m.hour = '';
        m.mins = '';
        m.sent = '';
    }
    m.post = m.post ? m.post : '';
    m.nick = m.nick ? m.nick : '';
    m.self = m.nick === $('#nick').val();
    return m
}

function senttime() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    return (h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m);
}

$(function() {
    var doc = $(document);
    doc.on('pjax:start', pjax.start);
    doc.on('pjax:end',   pjax.end);
    doc.on('submit', 'form[data-pjax]', pjax.submit);
    doc.on('submit', '#chat', chat.post);
    doc.pjax('a[data-pjax]', '#main');
});
