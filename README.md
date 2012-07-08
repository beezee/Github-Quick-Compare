##Github Quick Compare Bookmarklet

I love the Github diff view. It is immensely easier to read than the command line output.

I hate manually putting together compare links when comparing between commits, or between two branches where neither is default.

I made this bookmarklet so I don't have to do that anymore.

Run it on a commits listing page, or a branch listing page. Shift+click the first branch/commit you want in the diff, and then Ctrl+click the
second branch/commit you want in the diff, and you'll be looking at the diff.

If you don't care to mess with the source (it is super quick and dirty, btw thanks goes out to http://bender.fesb.hr/~robert/jquery-bookmarklet-generator)
then you can just drag this to your bookmarks bar:

<a class="bookmarklet" href="javascript:(function(W,D,C,$,V,H,S,s,d){if(!($=W.jq14||W.jQuery)||(V=$.fn.jquery)<&quot;1.3.2&quot;||V>&quot;1.4Z&quot;||C($)){H=D.getElementsByTagName(&quot;head&quot;)[0];S=D.createElement(&quot;script&quot;);S.type=&quot;text/javascript&quot;;S.src=&quot;http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js&quot;;S.onload=S.onreadystatechange=function(){if(!d&&(!(s=this.readyState)||s==&quot;loaded&quot;||s==&quot;complete&quot;)){d=1;W.jq14=$=W.jQuery.noConflict(1);C($);H.removeChild(S)}};H.appendChild(S)}})(window,document,function($){(function($) {
var firstBranch = '';
var commits = false;
var getBranch = function(href, split) {
var splitPoint = (commits) ? '/' : '...';
var pieces = href.split(splitPoint);
return pieces.pop();
};$('table.branches ul.actions li a, ol.commit-group div.commit-links a').bind('click', function(e) {
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
}});
}(jQuery));});">ghc</a>