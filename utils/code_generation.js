import Randomstring from "randomstring";

function getRandomCode() {
  const code = Randomstring.generate({
    length: 6,
    charset: "alphabetic",
  });

  return code;
}

export { getRandomCode };