let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = false;

let secure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

console.log(secure ? "Secure" : "Unsafe");
