import random
import tkinter as tk
from tkinter import ttk
from PIL import Image, ImageTk

#top-level widget
root = tk.Tk()
root.geometry("600x600")
root.title("Dice Roll")

#add an empty line for space
line = tk.Label(root, text="")
line.pack()

#add a heading
heading = tk.Label(root, text="TRY YOUR LUCK!",
                   fg="black",
                   bg="pink",
                   font="Times 16 bold")
heading.pack()

#add images
dice = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"]

#choose random image
dice_choice = random.randint(0, len(dice) - 1)
choice = ImageTk.PhotoImage(Image.open(dice[dice_choice]))

#starting image
imgLabel = tk.Label(root, image=choice)
imgLabel.image = choice
imgLabel.pack(expand=True)

#add button choice function
def rolling():
    global dice_choice
    dice_choice = random.randint(0, len(dice) - 1)
    choice = ImageTk.PhotoImage(Image.open(dice[dice_choice]))
    # change displayed image
    imgLabel.configure(image=choice)
    imgLabel.image = choice

    # update the statement
    entry = "You got a " + str(dice_choice+1) + "!"
    infoline.config(text=entry, font=("Times", 24, "bold"))

#add an empty line for space
infoline = tk.Label(root, text="")
infoline.pack()

# Create a custom style for the button
style = ttk.Style()
style.configure('Pink.TButton', background='pink', foreground='black')

# Add button
rollingBtn = ttk.Button(root, text="Roll",
                        style='Pink.TButton',
                        command=rolling)
rollingBtn.pack(expand=True)

# Call mainloop
root.mainloop()