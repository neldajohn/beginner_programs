'''
Name: Nelda 
Program: Python Translator

Ideas:
	- Make this an HTML project

'''


#import 

from googletrans import LANGUAGES
from googletrans import Translator
translator = Translator()



#variables
use = 1

#run the program
def run():
	print ("\nIs there anything else you need? ")
	run = input ("\tEnter 'Y' or 'y' to return to the main menu or 'X' or 'x' to exit: ")
	run_choices = ["Y", "y", "X", "x"]
	while (run not in run_choices):
		run = input ("\tEnter 'Y' or 'y' to return to the main menu or 'X' or 'x' to exit: ")

	return run


#print welcome message
def welcome():
	print("\n****** WELCOME TO THE PYTHON TRANSLATOR ******")


#menu
def menu():
	print("\nThe following languages are available for translation: \n ")
	
	position = 1
	for abbreviation, language in LANGUAGES.items():
		print("\t" + str(position)+ "." + abbreviation.upper(), "--", language.capitalize())
		position +=1

	
#functions
def program (use):
	if (use == 1):
		#print welcome message
		welcome()

	menu()


	user_input = input ("\nPlease enter your text: ")
	#check to ensure that the entry is not empty

	detected_language_code = translator.detect(user_input).lang

	if detected_language_code in LANGUAGES:
		detected_language_name = LANGUAGES[detected_language_code]
		print(f"Detected language: {detected_language_name.upper()}")
	else:
		print("Unable to determine the detected language.")

	#check with user:
	correctLang = input("\n\t Enter 'Y' to confirm or 'X' to enter the language of the text: ")
	while correctLang.upper() != 'Y' and correctLang.upper() != 'X':
		correctLang = input("\t Enter 'Y' to confirm or 'X' to enter the language of the text: ")


	if (correctLang.upper() == 'Y'):
		source = detected_language_code
	else:
		source = input("\tPlease enter the language of your text: ")
		lang_code = None
		for key,value in LANGUAGES.items():
			if value.lower() == source.lower():
				lang_code = key
				source = lang_code
				break

	supportedLangs = list(LANGUAGES.items())

	#do the translation
	user_toLang = input ("\nTranslate text to what language? ")
	
	toLang = None
	for code, name in LANGUAGES.items():
		if name.lower() == user_toLang.lower():
			toLang = code
			break


	translation = translator.translate(user_input, src=source, dest=toLang)
	
	print("\n -------- TRANSLATION BOOTH --------")
	print("\t" + LANGUAGES[source].capitalize(), ":", user_input.capitalize())
	print("\t" + LANGUAGES[toLang].capitalize(), ":", translation.text)



	cont = run()
	if (cont.upper() == 'Y'):
		return True 
	else:
		return False



#repeat?
while program(use):
	use += 1
