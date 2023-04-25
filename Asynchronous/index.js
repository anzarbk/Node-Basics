const fs = require("fs");
const superagent = require("superagent");

//normal callbacks

// fs.readFile("./dog.txt", (err, data) => {
//   console.log(`breed:${data}`);
//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .end((err, res) => {
//       if (err) return console.log(err);
//       console.log(res.body.message);

//       fs.writeFile("dog-img.txt", res.body.message, (err) => {
//         if (err) return console.log(err);
//         console.log("image saved");
//       });
//     });
// });

//.then method

// fs.readFile("./dog.txt", (err, data) => {
//   console.log(`breed:${data}`);
//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .then((res) => {
//       if (err) return console.log(err);
//       console.log(res.body.message);

//       fs.writeFile("dog-img.txt", res.body.message, (err) => {
//         if (err) return console.log(err);
//         console.log("image saved");
//       });
//     });
// });

//promise

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject("file not found");
      resolve(data);
    });
  });
};

const writeFilePro = (file, text) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, text, (err) => {
      if (err) reject("cant save this file");
      resolve("success");
    });
  });
};

// readFilePro("./dog.txt")
//   .then((data) => {
//     console.log(`breed:${data}`);
//     return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
//   })
//   .then((res) => {
//     console.log(res.body.message);
//     return writeFilePro("dog-img.txt", res.body.message);
//   })
//   .then(() => {
//     console.log("random dog image is saved");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//async

// const getDogPic = async () => {
//   const data = await readFilePro("./dog.txt");
//   console.log(`breed:${data}`);
//   const res1 = await superagent.get(
//     `https://dog.ceo/api/breed/${data}/images/random`
//   );
//   const saved = await writeFilePro("dog-img.txt", res1);
//   if (saved) console.log("random dog image is saved");
// };
// getDogPic();

//promise all

const getDogPic = async () => {
  const data = await readFilePro("./dog.txt");
  console.log(`breed:${data}`);
  const res1 = await superagent.get(
    `https://dog.ceo/api/breed/${data}/images/random`
  );
  const res2 = await superagent.get(
    `https://dog.ceo/api/breed/${data}/images/random`
  );
  const res3 = await superagent.get(
    `https://dog.ceo/api/breed/${data}/images/random`
  );
  const all = await Promise.all([res1, res2, res3]);
  const imgs = all.map((el) => el.body.messages);
  const saved = await writeFilePro("dog-img.txt", imgs.join("\n"));
  if (saved) console.log("random dog image is saved");
};
getDogPic();
