'''
Name: Nelda
Program: Rock, Paper, Scissors
    - Enter three times within time() and take all three at the end
    - consider adding drawings

'''


#importing
import random
import time

#declare variables
picks = (("ROCK", 'R'), ("PAPER",'P'), ("SCISSORS","S"))
best_of = 3 
score = 0

global turn 
turn = 1


#introduce the game and give instructions
def instructions():
    print ("\n\t===== ROCK, PAPER, SCISSORS =====")
    print ("\nIn this game, you will be asked to enter you choice between: " +
        "\n\t -'R' for rock," +
        "\n\t -'P' for paper, and " +
        "\n\t -'S' for scissors")

    name = input ("\nPlease enter your name:")

    return name

#let the computer pick first
def comp_pick():
    index = random.randint(0, len(picks)-1)

    pick = picks[index][1]

    pick = pick.upper()

    return pick

#player picks
def player_pick(name = ""):
    print ("\n" + name.capitalize()+ ", please enter 'R' for rock, 'P' for paper, and 'S' for scissors:")
    pick = input ("\n\tYour pick: ")
    while (pick.upper() != 'R' and pick.upper() != 'P' and pick.upper() != 'S'):
        pick = input ("\tPlease enter 'R' for rock,'P' for paper, and 'S' for scissors: ")

    pick = pick.upper()
    return pick
    
#compare the two
def compare(pick_1, pick_2):
    won = None
    if (pick_1 == pick_2):
        #--- adjust score
        print ("You have tied!")
    elif (pick_1 == 'R'):
        if (pick_2 == 'P'):
            #--- adjust score
            print ("Your paper covers rock!")
            won = True
        else:
            #--- adjust score
            print ("The rock crashes your scissors")
            won = False
    elif (pick_1 == 'P'):
        if (pick_2 == 'R'):
            #--- adjust score
            print ("The paper covers your rock!")
            won = False
        else:
            #--- adjust score
            print ("Your scissors cut the paper!")
            won = True
    elif (pick_1 == 'S'):
        if (pick_2 == 'P'):
            #--- adjust score
            print ("The scissors cuts the paper!")
            won = False
        else:
            #--- adjust score
            print ("Your rock crashes the scissors!")
            won = True

    return won

#ask player if he/she wants to try again
def tryAgain(name = ""):
    ask = ("\n" + name.capitalize() + ", do you want to try again? "+
        "\n\t If yes, enter '1'. Otherwise, enter '0': ")
    answer = input(ask)
    while (answer != "1" and answer != "0"):
        input("\t Please enter '1' to try again or '0' to exit the game: ")

    return int(answer)


#GAME FUNCTION
def game():
    #declare score is 0
    global score
    score = 0
    #print instructions
    global player_name

    #only do this if it is the first time
    if (turn == 1):
        player_name = instructions()

    for i in range (best_of):
        print ("\n --------- ROUND " + str(i+1
            ) + "---------")
        print ("\n The computer will select first... ")
        time.sleep(0.5)

        #let the game pick first
        compPick = comp_pick()

        time.sleep(0.5)

        print ("\n \tDone! Your turn!")

            
        #let the player pick
        playerPick = player_pick(player_name)

        #compare the two
        player_won = compare(compPick, playerPick) 

        #calculate the score
        if (player_won == True): 
            score+= 1

        time.sleep(2)


    print ("\n************* GAME OVER *************")

    #print the score
    print ("\t" + player_name.capitalize() + "'s score: " + str(score) + " out of " + str(len(picks)))
    if (score>1):
        print ("\tYou defeated the computer! :)")
    else:
        print("\tYou lost to the computer!\n")


    #ask if the player wants to try again
    try_again = tryAgain(player_name)

    #preserve the name somewhere -> maybe in a temp file?

    return try_again
    


#play the game

while (game()):
    turn +=1


#print extra line for space





