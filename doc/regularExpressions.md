## Cucumber Regular Expressions Cheat Sheet
Regular expressions are a big part of cucumber. Cucumber matches a step and it's parameters against a step definition’s Regexp,To make the most of that power, you have to know something about regular expressions.</br>
 [examples](https://github.corp.ebay.com/ecg-global/BOLT-BDD-CucumberJS/blob/master/src/step_definitions/gherkinExampleSteps.ts)</br>

.*	matches anything (or nothing), literally “any character (except a newline) 0 or more times”   
.+	matches at least one of anything   
[0-9]* or \d*	matches a series of digits (or nothing)   
[0-9]+ or \d+	matches one or more digits   
"[^\"]*"	matches something (or nothing) in double quotes      
^ matches beginning of string
$ matches end of string
