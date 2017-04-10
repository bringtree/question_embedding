###diff
   diff game_old.js game_new.js
 
```   
   6a7
>   13: 'enter',
9d9
<   38: 'up',
395c395
<     if (KEY_STATUS.up) {
---
>     if (KEY_STATUS.spacr) {
409c409
<     if (KEY_STATUS.space) {
---
>     if (KEY_STATUS.enter) {
922c922
<         KEY_STATUS.space = false; // hack so we don't shoot right away
---
>         KEY_STATUS.space = false; // hack so we don't move right away
   
```
a - add \
c - change \
d - delete 


diff game_old.js game_new.js -c
```

*** game_old.js	2017-04-09 23:55:36.000000000 +0800
--- game_new.js	2017-04-09 23:56:14.000000000 +0800
***************
*** 4,12 ****
  //

  KEY_CODES = {
    32: 'space',
    37: 'left',
-   38: 'up',
    39: 'right',
    40: 'down',
    70: 'f',
--- 4,12 ----
  //

  KEY_CODES = {
+   13: 'enter',
    32: 'space',
    37: 'left',
    39: 'right',
    40: 'down',
    70: 'f',
***************
*** 392,398 ****
        this.vel.rot = 0;
      }

!     if (KEY_STATUS.up) {
        var rad = ((this.rot-90) * Math.PI)/180;
        this.acc.x = 0.5 * Math.cos(rad);
        this.acc.y = 0.5 * Math.sin(rad);
--- 392,398 ----
        this.vel.rot = 0;
      }

!     if (KEY_STATUS.spacr) {
        var rad = ((this.rot-90) * Math.PI)/180;
        this.acc.x = 0.5 * Math.cos(rad);
        this.acc.y = 0.5 * Math.sin(rad);
***************
*** 406,412 ****
      if (this.delayBeforeBullet > 0) {
        this.delayBeforeBullet -= delta;
      }
!     if (KEY_STATUS.space) {
        if (this.delayBeforeBullet <= 0) {
          this.delayBeforeBullet = 10;
          for (var i = 0; i < this.bullets.length; i++) {
--- 406,412 ----
      if (this.delayBeforeBullet > 0) {
        this.delayBeforeBullet -= delta;
      }
!     if (KEY_STATUS.enter) {
        if (this.delayBeforeBullet <= 0) {
          this.delayBeforeBullet = 10;
          for (var i = 0; i < this.bullets.length; i++) {
***************
*** 919,925 ****
      waiting: function () {
        Text.renderText(ipad ? 'Touch Sreen to Start' : 'Press Space to Start', 36, Game.canvasWidth/2 - 270, Game.canvasHeight/2);
        if (KEY_STATUS.space || window.gameStart) {
!         KEY_STATUS.space = false; // hack so we don't shoot right away
          window.gameStart = false;
          this.state = 'start';
        }
--- 919,925 ----
      waiting: function () {
        Text.renderText(ipad ? 'Touch Sreen to Start' : 'Press Space to Start', 36, Game.canvasWidth/2 - 270, Game.canvasHeight/2);
        if (KEY_STATUS.space || window.gameStart) {
!         KEY_STATUS.space = false; // hack so we don't move right away
          window.gameStart = false;
          this.state = 'start';
        }

```
“＋” 比较的文件的后者比前着多一行\
“－” 比较的文件的后者比前着少一行\
“！” 比较的文件两者有差别的行

diff game_old.js game_new.js -u

```

--- game_old.js	2017-04-09 23:55:36.000000000 +0800
+++ game_new.js	2017-04-09 23:56:14.000000000 +0800
@@ -4,9 +4,9 @@
 //

 KEY_CODES = {
+  13: 'enter',
   32: 'space',
   37: 'left',
-  38: 'up',
   39: 'right',
   40: 'down',
   70: 'f',
@@ -392,7 +392,7 @@
       this.vel.rot = 0;
     }

-    if (KEY_STATUS.up) {
+    if (KEY_STATUS.spacr) {
       var rad = ((this.rot-90) * Math.PI)/180;
       this.acc.x = 0.5 * Math.cos(rad);
       this.acc.y = 0.5 * Math.sin(rad);
@@ -406,7 +406,7 @@
     if (this.delayBeforeBullet > 0) {
       this.delayBeforeBullet -= delta;
     }
-    if (KEY_STATUS.space) {
+    if (KEY_STATUS.enter) {
       if (this.delayBeforeBullet <= 0) {
         this.delayBeforeBullet = 10;
         for (var i = 0; i < this.bullets.length; i++) {
@@ -919,7 +919,7 @@
     waiting: function () {
       Text.renderText(ipad ? 'Touch Sreen to Start' : 'Press Space to Start', 36, Game.canvasWidth/2 - 270, Game.canvasHeight/2);
       if (KEY_STATUS.space || window.gameStart) {
-        KEY_STATUS.space = false; // hack so we don't shoot right away
+        KEY_STATUS.space = false; // hack so we don't move right away
         window.gameStart = false;
         this.state = 'start';
       }
```
diff -ruN game_old.js game_new.js>patch.log
```
➜  cat patch.log
--- game_old.js	2017-04-09 23:55:36.000000000 +0800
+++ game_new.js	2017-04-09 23:56:14.000000000 +0800
@@ -4,9 +4,9 @@
 //

 KEY_CODES = {
+  13: 'enter',
   32: 'space',
   37: 'left',
-  38: 'up',
   39: 'right',
   40: 'down',
   70: 'f',
@@ -392,7 +392,7 @@
       this.vel.rot = 0;
     }

-    if (KEY_STATUS.up) {
+    if (KEY_STATUS.spacr) {
       var rad = ((this.rot-90) * Math.PI)/180;
       this.acc.x = 0.5 * Math.cos(rad);
       this.acc.y = 0.5 * Math.sin(rad);
@@ -406,7 +406,7 @@
     if (this.delayBeforeBullet > 0) {
       this.delayBeforeBullet -= delta;
     }
-    if (KEY_STATUS.space) {
+    if (KEY_STATUS.enter) {
       if (this.delayBeforeBullet <= 0) {
         this.delayBeforeBullet = 10;
         for (var i = 0; i < this.bullets.length; i++) {
@@ -919,7 +919,7 @@
     waiting: function () {
       Text.renderText(ipad ? 'Touch Sreen to Start' : 'Press Space to Start', 36, Game.canvasWidth/2 - 270, Game.canvasHeight/2);
       if (KEY_STATUS.space || window.gameStart) {
-        KEY_STATUS.space = false; // hack so we don't shoot right away
+        KEY_STATUS.space = false; // hack so we don't move right away
         window.gameStart = false;
         this.state = 'start';
       }
```

 patch game_old.js patch.log

```
patching file game_old.js
➜  935git diff game_old.js game_new.js -u
```

算了 不如开个issue 。