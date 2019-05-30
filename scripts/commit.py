#!/usr/bin/env python3

import os

affirmative_answers = {'y', 'ye', 'yes', 'yea', 'yeah', 'dolphin squeaks'}

commit_message = input('finish this sentence - "this commit should": ')

add_co_authors = input('would you like to add any co-authors? ')

co_authors = []

while add_co_authors in affirmative_answers:
    co_author_name = input('what\'s the name of co-author number ' + str(len(co_authors) + 1) + '? ')
    co_author_email = input('and what\'s the email address linked to their github account? ')
    co_author = 'Co-authored-by: ' + co_author_name + ' <' + co_author_email + '>'
    co_authors.append(co_author)
    add_co_authors = input('would you like to add another co-author? ')

formatted_co_authors = '\n'.join(co_authors) if len(co_authors) else ''

commit = commit_message

if formatted_co_authors:
    two_empty_lines = '\n\n\n'
    commit = commit + two_empty_lines + formatted_co_authors

print("\n" + commit + "\n")

os.system('git commit -m "' + commit + '"')
