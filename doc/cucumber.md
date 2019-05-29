## Cucumber keywords
1. *Feature* is at the top of a feature file followed by a ':' and a short describes, use free-form text underneath 'Feature' if you want to add more description</br>
2. *Scenario*</br>
3. *Given, When, Then, And, But* Cucumber executes each step in a scenario one at a time, in the sequence written in case</br>
4. *Background*(perform not use it) is used when repeating the same Given steps in all of the scenarios in a feature</br>
5. *Scenario Outline* can be used to run the same Scenario multiple times with different values, MUST contain an Examples</br>
6. *Examples* used with Scenario Outline to run the same Scenario multiple times with different parameter</br>
7. \# (Comments)</br>

## Step Arguments
1. Int
2. String
3. """ (Doc Strings) is to pass a larger piece of text to a step definition</br>
4. | (Data Tables)</br>
5. @ (Tags)  tags can be above Feature to group related features, independent of your file and directory structure.</br>

## How to write a case in cucumber
1. Given steps are used to describe the initial scene of the scenario. It is typically something that happened in the past,
The purpose of Given steps is to put the system in a known state before the user (or external system) starts interacting with the system.
> Given a live Ad</br>
> Given homepage is opened
2. When steps are used to describe an event or an action. This can be a person interacting with the page.
> When user upload 1 of default pictures to Post page</br>
> When user click an element
3. Then steps are used to describe an expected outcome or result.
> Then element is displayed on the screen</br>
> Then the web page should navigate to homepage
4. And, But were used If have several Given’s, When’s, or Then's

## Case standard
1. Independent  
Cases should #not# depend on environment, equipment and test object
A case should #not# dependent on the other cases, we can't make sure the sequence when cases run in parallel 
2. Isolation   
The data for each case should be separated and isolated
3. Only one check point   
Only one check point in a case, because points would not be checked after one check point failed     
Only one scenario will be run when run a feature, scenarios run in sequence and rest of them will not be executed if one has failed

## Case examples
Case examples are under [/Features/tests](https://github.corp.ebay.com/ecg-global/BOLT-BDD-CucumberJS/tree/master/features/tests)      
gherkinExample.feature for gherkin syntax     
postAdExample.feature for post flow       
srppageExample.feature for srp flow    
trackingExample.feature for tracking


