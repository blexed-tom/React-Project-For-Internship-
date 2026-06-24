const exists = students.find(
  (s) => s.email.toLowerCase() === student.email.toLowerCase()
);

if (exists) {
  alert("Duplicate Entry!");
  return false;
}