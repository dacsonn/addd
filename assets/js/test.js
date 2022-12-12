function InvertedMerge(s1,s2) {
    let s ="";
    let a = s1.length-1;
    let b = s2.length-1;
    while(a>=0 || b>=0){
        if(a>=0){
            s+=s1[a];
        }
        if(b>=0){
            s+=s2[b];
        }
        a--;
        b--;
    }
    return s;
}
console.log(InvertedMerge("abcdefg","12345"));
console.log(InvertedMerge("x","12345"));
console.log(InvertedMerge("ABCDEF","z"));



