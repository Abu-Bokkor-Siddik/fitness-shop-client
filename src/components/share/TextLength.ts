

 const TextLength = (text:string,maxtext:number) => {
  const texts = text.length>maxtext?`${text.slice(0,maxtext)}...`:text;
  return texts
}

export default TextLength
