let memberDirectory = {
  'Jane Doe': '323-8293',
  'Margaret Asbury': '989-1111',
  'Callum Beech': '533-9090',
  'Juanita Eastman': '424-1919',
};

function isValidName(name) {
  let a = [...'abcdefghijklmnopqrstuvwxyz '];
  if (name[0] === ' ' || name[name.length - 1] === ' ') return false;
  if (name.split(' ').length !== 2) return false;
  return [...name].every(char => a.includes(char.toLowerCase()));
}

function isValidPhone(phone) {
  return (/^\d{3}-\d{4}$/).test(phone);
}

function validMemberInfo(name, phone) {
  return isValidName(name) && isValidPhone(phone);
}

function addMember(name, phone) {
  if (validMemberInfo(name, phone)) {
    memberDirectory[name] = phone;
  } else {
    console.log('Invalid member information.');
  }
}

//Test
addMember('Laura Carlisle', '444-2223');
addMember('Rachel Garcia', '232-1191');
addMember('Earl 5mith', '331-9191');
addMember('hello wo rd', '111-5555');

console.log(memberDirectory);