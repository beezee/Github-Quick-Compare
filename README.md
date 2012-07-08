##Github Quick Compare Bookmarklet

I love the Github diff view. It is immensely easier to read than the command line output.

I hate manually putting together compare links when comparing between commits, or between two branches where neither is default.

I made this bookmarklet so I don't have to do that anymore.

Run it on a commits listing page, or a branch listing page. Shift+click the first branch/commit you want in the diff, and then Ctrl+click the
second branch/commit you want in the diff, and you'll be looking at the diff.

If you don't care to mess with the source (it is super quick and dirty, btw thanks goes out to http://bender.fesb.hr/~robert/jquery-bookmarklet-generator)
then you go [here](http://bender.fesb.hr/~robert/jquery-bookmarklet-generator/#name=ghc&minVersion=1.3.2&maxVersion=1.4&code=(function(%24)+%7B%0A++++var+firstBranch+%3D+''%3B%0A++++var+commits+%3D+false%3B%0A++++var+getBranch+%3D+function(href%2C+split)+%7B%0A++++++++var+splitPoint+%3D+(commits)+%3F+'%2F'+%3A+'...'%3B%0A++++++++var+pieces+%3D+href.split(splitPoint)%3B%0A++++++++return+pieces.pop()%3B%0A++++%7D%3B%0A%0A++++%24('table.branches+ul.actions+li+a%2C+ol.commit-group+div.commit-links+a').bind('click'%2C+function(e)+%7B%0A++++++++if(e.ctrlKey)+%7B%0A++++++++++++e.preventDefault()%3B%0A++++++++++++if+(!firstBranch+%7C%7C+firstBranch.trim()+%3D%3D%3D+'')+return%3B%0A++++++++++++var+replace+%3D++(commits)+%3F+%2F%5C%2Fcommits%5C%2F%5B%5E%5C%2F%5D.*%24%2F+%3A+'%2Fbranches'%3B%0A++++++++++++window.location+%3D+window.location.href.replace(replace%2C+'')%2B'%2Fcompare%2F'%2BfirstBranch%2B'...'%2BgetBranch(%24(this).attr('href'))%3B%0A++++++++%7D%0A++++++++%0A++++++++if(e.shiftKey)+%7B%0A++++++++++++e.preventDefault()%3B%0A++++++++++++commits+%3D+(%24(this).parent().hasClass('commit-links'))%3B%0A++++++++++++firstBranch+%3D+getBranch(%24(this).attr('href'))%3B%0A++++++++%7D%0A%0A++++%7D)%3B%0A++++%0A%7D(jQuery))%3B%0A&minify=on&reedit=on&generate=1)
and drag the ghc bookmarklet to your bookmarks bar: