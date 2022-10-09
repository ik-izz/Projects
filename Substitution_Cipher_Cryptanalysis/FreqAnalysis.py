# Takes the cipher as input
cipher = input('Paste your cipher text (lowercase): ')

# Spreads the string into a list so the ciphertext can be replaced later
newCipher = [*cipher]

# Initiates 26 nested lists to represent alphabets and its frequency later on
letters = [[0,0] for i in range(26)]

#Replaces the first value of each nested list to hold 1 letter of the alphabet
for i in range(len(letters)):
  letters[i][0] = chr(i+97)

# Calculates the relative frequency of each letter
for letter in cipher:
  # if the input isn't a-z it skips over the value
  if(ord(letter) < 97 or ord(letter) > 122):
    continue
  letters[ord(letter)-97][1] += 1

# outputs the relative frequency for each letter
print('Relative frequency:')
for letter in letters:
  print(f'{letter[0]}: {int((letter[1]/len(cipher)*100))}%' )

#Loops until user inputs EXIT and will replace the ciphertext with plaintext specified by the user
while (True):
  plaintext = input('Enter a plaintext letter (enter exit to exit): ').upper()
  # Checks if user wants to exit the program
  if(plaintext == 'EXIT'):
    print('exiting upon your request')
    break
  # Checks if input is valid (A-Z)
  elif(plaintext < 'A' or plaintext > 'Z'):
    print('Invalid input!')
    continue
    
  toBeReplaced = input('Input ciphertext letter you want to replace: ').lower()
  print(f'plaintext: {plaintext} \nTo be replaced: {toBeReplaced}\n')
  # Replaces the ciphertext and plaintext specified by the user
  for i in range(len(newCipher)):
    if newCipher[i] == toBeReplaced:
      newCipher[i] = plaintext
  print("".join(newCipher))
  