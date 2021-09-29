# Is Your Birthday Palindrome

## List of Contents
- Description
- Input
- Processing
- Output
- Link

> **Description:** Is your birthday(DOB) looks same from left side and right side, if yes then your birthday is palindrome and if not then this app will tell you `How many days you born ahead or behind a palindrome birthday`. If you don't know is your birthday palindrome you can check, enter your date of birth and click on `Show` button, you will get to know.

> **Input:** A user has to enter his/her date of birth in <strong>mm/dd/yyyy</strong> format, if not entered in format described then will get a message form the app saying `Something went wrong`.

> **Output**: Output will be a simple message, stating whether your birthday is palindrome or not, if yes then `Your birthday is palindrome!!` or not then `The nearest palindrome date is dd/mm/yyy, you are born behind/ahead X days.`

> **Processing:** 
 - Get date of birth from user in format <strong>mm/dd/yyy</strong>.
 - Click on Show button.
 - After clicking on Show button, then function `getDateAsString` takes date as input convert into date format to remain safe throught the process.
 - Then function `getDateInAllFormats` takes date as input converted into string and returns an array of string have date in all formats as `[ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yyddmm]`.
 - If any of the date format from the array(output of `getDateInAllFormats` function) is palindrome, then the user is updated with message, else upcoming palindrome birthday and previously went palindrome birthday is found out. The palindrome bdirthday check is done using function `isStringPalindrome` which uses function `reverseString`and take birthday string as input and return boolean as output.
 - If user birthday is not palindrome then functions `getNextPalindromeDate` and `getPreviousPalindromeDate` taking date as input and returning palindrome birthdays and then which palindrome birthday is shortest distance or nearest to user birthday, is been informed to user with relevant message.
 
 

> **Link:** [Birthday Palindrome or not](https://arpit-birthday-palindrome.netlify.app/)
 
