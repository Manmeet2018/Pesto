// closure
function handleLikes() {
  let addLike  = 0;
 return () => {
    return ++addLike;
  };
}

const like = handleLikes();
console.log(like());
console.log(like());
console.log(like());
