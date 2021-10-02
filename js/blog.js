var textarea = $('.term');
var speed = 3000; //Writing speed in milliseconds
var text_root = '_jkp_@its-me:~$ ';
textarea.append(text_root);
var text = 'ls -lt /blogs';
setTimeout(function(){ },500);
var i = 0;




runner();

function runner() {
  textarea.append(text.charAt(i));
  i++;
  setTimeout(
    function() {
      if (i < text.length)
        runner();
      else  {
        textarea.append("<br>");
        textarea.append("Total 2");
        i = 0 ;
        blogs_titles = ["About Music", "Test"]; //Add here your blogs
        blog_content = ["<br> <center> I don't believe that a musical idea starts in your brain. <br> I believe it starts in place before, that we don't have any direct contact with.</center>", " "]
        dates = ["Aug 20 16:51", "Sep 29 22:11"];
        setTimeout(function() {runner2();}, 500);
      }
    }, Math.floor(Math.random() * 170) );
}



function runner2() {
    for (let i = 0; i < blogs_titles.length; i++) {
        text =  "<br><hr>";
        textarea.append(text)
        text = " -rw-r--r-- 1 _jkp_ 4096  52 "  + dates[i]  + " ".repeat(50) + blogs_titles[i] + "<br>";
        textarea.append(text)
        text =  blog_content[i] + "<br>";
        textarea.append(text)
      }

  }
