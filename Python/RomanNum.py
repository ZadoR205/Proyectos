numeral_input = input("Ingrese el numero romano que quiera convertir: ")

def roman_to_int(numeral):
    final_answer = 0
    if "CM" in numeral or "cm" in numeral:
        final_answer += 900
        numeral = numeral.replace("CM", "")
        numeral = numeral.replace("cm", "")
    if "CD" in numeral or "cd" in numeral:
        final_answer += 400
        numeral = numeral.replace("CD", "")
        numeral = numeral.replace("cd", "")
    if "XC" in numeral or "xc" in numeral:
        final_answer += 90
        numeral = numeral.replace("XC", "")
        numeral = numeral.replace("xc", "")
    if "XL" in numeral or "xl" in numeral:
        final_answer += 40
        numeral = numeral.replace("XL", "")
        numeral = numeral.replace("xl", "")
    if "IX" in numeral or "ix" in numeral:
        final_answer += 9
        numeral = numeral.replace("IX", "")
        numeral = numeral.replace("ix", "")
    if "IV"  in numeral or "iv" in numeral:
        final_answer += 4
        numeral = numeral.replace("IV", "")
        numeral = numeral.replace("iv", "")

    for i in numeral:
        if i == "M" or i =="m":
            final_answer += 1000
        elif i == "D" or i == "d":
            final_answer += 500
        elif i == "C" or i  == "c":
            final_answer += 100
        elif i == "L" or i  == "l":
            final_answer += 50
        elif i == "X" or i  == "x":
            final_answer += 10
        elif i == "V" or i  == "v":
            final_answer += 5
        elif i == "I" or i == "i":
            final_answer += 1
    print(f"Los numeros romanos que ingresaste se traducen a {final_answer}!")

roman_to_int(numeral_input)
