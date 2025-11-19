<!DOCTYPE html>
<html>
<body>

<div class="step" id="step1">
  <input id="name" placeholder="Name"><br><br>
  <button id="next1">Next</button>
</div>

<div class="step" id="step2" style="display:none">
  <input id="email" placeholder="Email"><br><br>
  <button id="back1">Back</button>
  <button id="next2">Next</button>
</div>

<div class="step" id="step3" style="display:none">
  <input id="pass" placeholder="Password"><br><br>
  <button id="back2">Back</button>
  <button id="finish">Finish</button>
</div>

<h3 id="summary" style="display:none"></h3>

<script src="multistep.js"></script>
</body>
</html>
