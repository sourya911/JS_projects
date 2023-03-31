console.log("TESTING");
const text=document.querySelector(".text")
const person =document.querySelector(".person")
const btn = document.querySelector(".btn")

quates =[
    {
     quote: "You have to write the book that wants to be written. And if the book will be too difficult for grown-ups, then you write it for children.",

    person: "Madeleine L'Engle"},
{
    quote:  "If you don't have time to read, you don't have the time (or the tools) to write. Simple as that.",
person :"Stephen King"},
{
 quote: "We write to taste life twice, in the moment and in retrospect.",
person:"Anaïs Nin"},
{
 quote: "Substitute 'damn' every time you're inclined to write 'very;' your editor will delete it and the writing will be just as it should be.",
person:"Mark Twain"},
{
 quote: "If there's a book that you want to read, but it hasn't been written yet, then you must write it.",
person:"Toni Morrison"},
{
quote:"One day I will find the right words, and they will be simple.",
person:"Jack Kerouac, The Dharma Bums"},
{
quote:"Either write something worth reading or do something worth writing.",
 person : "Benjamin Franklin"},
,{
quote:"You never have to change anything you got up in the middle of the night to write.",
 person : "Saul Bellow"}
,{
quote:"No tears in the writer, no tears in the reader. No surprise in the writer, no surprise in the reader.",
 person : "Robert Frost"},

{quote:"Read, read, read. Read everything trash, classics, good and bad, and see how they do it. Just like a carpenter who works as an apprentice and studies the master. .",
 person : "William Faulkner"}
,{
quote:"You must stay drunk on writing so reality cannot destroy you.",
 person : "Ray Bradbury, Zen in the Art of Writing"}
,{
quote:"Words can be like X-rays if you use them properly they'll go through anything. You read and you're pierced.",
 person : "Aldous Huxley, Brave New World"}
,{
quote:"How vain it is to sit down to write when you have not stood up to live.",
 person : "Henry David Thoreau"}
,{
quote:"I can shake off everything as I write; my sorrows",
  person : "sappear, my courage is reborn."}
,{
quote:"A writer is someone for whom writing is more difficult than it is for other people.",
 person : "Thomas Mann, Essays of Three Decades"}
,{
quote:"Let me live, love, and say it well in good sentences.",
 person : "Sylvia Plath, The Unabridged Journals of Sylvia Plath"}
,{
quote:"Here is a lesson in creative writing. First rule: Do not use semicolons. They are transvestite hermaphrodites representing absolutely nothing. All they do is show you've been to college.",
 person : "Kurt Vonnegut Jr."}
,{
quote:"Don't bend; don't water it down; don't try to make it logical; don't edit your own soul according to the fashion. Rather, follow your most intense obsessions mercilessly.",
 person : "Franz Kafka"}
,{
quote:"I kept always two books in my pocket, one to read, one to write in.",
 person : "Robert Louis Stevenson"}
,{
quote:"You can make anything by writing.",
person:"C.S. Lewis"}
,{
quote:"A word after a word after a word is power.",
 person : "Margaret Atwood"}
,{
quote:"Tears are words that need to be written.",
 person : "Paulo Coelho"}
,{
quote:"You should write because you love the shape of stories and sentences and the creation of different words on a page. Writing comes from reading .",
 person : "Annie Proulx"}

]
btn.addEventListener("click",()=>{

    const random=Math.floor(Math.random()*quates.length)
    console.log(random)

    text.textContent=quates[random].quote;
    person.textContent=quates[random].person;

   
})