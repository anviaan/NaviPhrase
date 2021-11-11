
# NaviPhrase

 **What is NaviPhrase?**
It's a bot that posts user phrases 

**Who to start? **

 1. Clone the repository with 
 ``` git clone https://github.com/anviaan/NaviPhrase.git```
 2. Create a ``config.json`` file and copy the following lines
 ```
 {
"token": "your token",
"prefix":"n!", 
"embedColor": "#FF00EC"
}
```
3. Change the token, prefix and embed color of your preference
4. If you decided to change the prefix 
	-  change the number 8 in the line 30 to the number of characters and letters of your prefix has next to the word public
	- example: my prefix is navi!
	- navi!public =11 characters
	- So in the line 30 i have to change 8 with 11
5. Repeat the instuctions of number 4 but in the line 59 with the number 9 
	-  change the number 9 in the line 59 to the number of characters and letters of your prefix has next to the word privade
	- example: my prefix is navi!
	- navi!privade =12 characters
	- So in the line 59 i have to change 9 with 12 
6. Run  ``` npm install -y ```
7. To execute the bot we use  ``` node index.js ``` or if you want to save the privade phrase use ``` node index.js > privade.txt```
	- If your time zone isn't America/New_York, you can change it on index.js line 85
