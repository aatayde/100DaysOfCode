# Incrimenting 5% to the amount entered until reaching desired amount

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ User Input ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# User input for savingAmount
print('Please enter the amount you wish to invest monthly:')
investment = int(input())

# user input for Percentage
print('Please enter the percentage amount:')
percentageIncrease = int(input()) / 100

#user input for Time
print('Please enter the desired amount you wish to reach:')
target = float(input())


# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Calculations ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

savingAmount = 0

# while loop
counter = 0
while savingAmount < target:

# Add month to counter
    counter += 1
    print('Month: ' + str(counter))
# Step 1, Add investment to savings
    savingAmount += investment
    # print('savingAmount: $' + str(savingAmount))
    increase = ((savingAmount * percentageIncrease))
    # print('Amount earned from percentage: $' + str(increase))
    print('investment + intrest: $' + "{:.2f}".format(savingAmount) + ' + $' + "{:.2f}".format(increase))

# Total
    total = increase + savingAmount
    print('Your total is: $' + "{:.2f}".format(total) + ', after ' + str(counter) + ' month of investing')

    savingAmount = total
    # print('Savings after ' + str(counter) + 'months: ' + str(savingAmount))

print('number of months this until goal was reached: ' + str(counter))