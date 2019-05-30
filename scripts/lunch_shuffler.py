from random import randint

lunch_options = []

shuffle_keywords = {".s", ".sh", ".shuf", ".start", ".go", ".shuffle"}

def shuffle():
    print("\nYou are going to **" + lunch_options[randint(0, len(lunch_options)) - 1] + "** for lunch today! ...Congratulations? 🤔\n\nYour options were:\n" + ",\n".join(lunch_options))

def add_options():
    option = input("\nAdd an option to the lunch shuffler or enter .shuffle to begin!:\n\n")
    if option not in shuffle_keywords and len(option):
        lunch_options.append(option)
    if option not in shuffle_keywords or not len(lunch_options):
        add_options()
    else:
        shuffle()

add_options()
