module.exports = (fullName) => {
  if(typeof fullName !== 'string') return 'Error';
  const [ firstName, lastName, excessive ] = fullName.split(' ');
  if(!firstName || !lastName || excessive) return 'Error';
  return firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() + ' ' + lastName[0].toUpperCase() + lastName.slice(1).toLowerCase() ;
};
