class PasswordManagement {
    constructor() {
        this.storedPassword = "";
    }

    validatePassword(password1, password2) {
        let hasLowerCase = false;
        let hasUpperCase = false;
        let hasNumber = false;

        const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", 
            "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

        const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", 
            "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            
        const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        
        //check if password match
        if (password1 !== password2) {
            console.log("The password does not match");
            return false;
        //check minimum password length
        } else if (password1.length < 8) {
            console.log("The password must have at least 8 characters");
            return false;
        } else {
            //iterate in each letter
            for (let i = 0; i < password2.length; i++) {
                let char = password2[i];

                //check if uppercase letter
                for (let j = 0; j < upperCase.length; j++) {
                    if (char === upperCase[j]) {
                        hasUpperCase = true;
                        break;
                    }
                }
                //check if lowercase letter
                for (let j = 0; j < lowerCase.length; j++) {
                    if (char === lowerCase[j]) {
                        hasLowerCase = true;
                        break;
                    }
                }
                //check if number
                for (let j = 0; j < numbers.length; j++) {
                    if (char === numbers[j]) {
                        hasNumber = true;
                        break;
                    }
                }
            }
            if (hasUpperCase && hasLowerCase && hasNumber) {
                return true;
            } else {
                console.log("Password must contain at least one uppercase letter, one lowercase letter, and one number.");
                return false;
            }
        }
    }
    
    reversedPassword(password2) {
        let reversedPassword = "";

        //iterate in reverse order
        for (let i = password2.length - 1; i >= 0; i--) {
            reversedPassword += password2[i];
        }

        return reversedPassword;
    }

    storePassword(name, password1, password2) {
        if (this.validatePassword(password1, password2)) {
            this.storedPassword = this.reversedPassword(password1);
            console.log("Password successfully stored.");
            return { name: name, newPassword: this.storedPassword };
        } else {
            console.log("Password is not valid.");
            return { name: name, newPassword: password1 };
        }
    }
}

const passwordManagement = new PasswordManagement();

const password1 = "Pass12345";
const password2 = "Pass12345";
const names = "John";

console.log(passwordManagement.storePassword(names, password1, password2));
