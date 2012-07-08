(function($) {
    var firstBranch = '';
    var commits = false;
    var getBranch = function(href, split) {
        var splitPoint = (commits) ? '/' : '...';
        var pieces = href.split(splitPoint);
        return pieces.pop();
    };

    $('table.branches ul.actions li a, ol.commit-group div.commit-links a').bind('click', function(e) {
        if(e.ctrlKey) {
            e.preventDefault();
            if (!firstBranch || firstBranch.trim() === '') return;
            var replace =  (commits) ? /\/commits\/[^\/].*$/ : '/branches';
            window.location = window.location.href.replace(replace, '')+'/compare/'+firstBranch+'...'+getBranch($(this).attr('href'));
        }
        
        if(e.shiftKey) {
            e.preventDefault();
            commits = ($(this).parent().hasClass('commit-links'));
            firstBranch = getBranch($(this).attr('href'));
        }

    });
    
}(jQuery));
