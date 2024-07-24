customers = ["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"];

function sortCustomerName(customers) {
  for (let i = customers.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (customers[j] > customers[j + 1]) {
        [customers[j], customers[j + 1]] = [customers[j + 1], customers[j]];
      }
    }
  }
  return customers;
}

console.log(sortCustomerName(customers));
// ตอบคำถามตรงนี้จ้า
/*
การจะรู้ว่า Bubble Sort Algorithm มี Big O เป็นเท่าไร ต้องทำความเข้าใจการทำงานของมันก่อน เริ่มต้น ตัว algorithm นี้จะเป็นการเปรียบเทียบค่าในแต่ละ index
ถ้าค่าใน index ปัจจุบันที่ค่า มากกว่าค่าใน index ตัวถัดไป จะต้องทำการอย่างไรก็ตามให้ค่าค่าใน index ปัจจุบันมีค่าน้อยค่าใน index ตัวถัดไป ซึ่งในกรณีของผม
จะใช้การ swap ค่าในแต่ละ index แต่หลักการนี้เมื่อครบ 1 รอบ ค่าสุดท้ายใน index ก็จะได้ค่ามากที่สุด ซึ่งค่าก่อนหน้านั้นอาจจะยังเรียงดีแล้วหรือยังเรียงไม่ดี ดังนั้นจึง
ต้องเพิ่ม loop อีกชั้นในการกำหนดการ loop เพื่อที่จะ swap ค่าให้ครบโดยเรียงจากน้อยไปมาก ดังนั้น จึงใช้ loop 2 ชั้นในการทำงาน ซึ่งจะวนครบทุกรอบหรือในกรณีที่
เลวร้ายหรือแย่ที่สุดจะต้องทำการ swap ในทุกๆรอบซึ่งจะได้ bigO(n^2) ตัวอย่างกรณีที่เลวร้าย -->  number = [6,5,4,3,2,1]
*/
