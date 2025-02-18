class PasswordManagement {
    constructor(password1, password2) {
        this.storedPassword = "";
    }

    validatePassword(password1, password2 ) {
        let hasLowerCase = false;
        let hasUpperCase = false;
        let hasNumber = false;

        const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", 
            "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

        const lowerCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", 
            "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
            
        const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];

        if (password1 !== password2){
            console.log("The password does not match");
            return false;
        } else if(password1.length < 8) {
            console.log("The password must have atleast 8 characters");
            return false;
        } else {
            for(let i = 0; i < password2.length; i++) {
                let char = password2[i];

                for(let j = 0; j < hasUpperCase.length; j++){
                    if(char === hasUpperCase[j]){
                        hasUpperCase = true;
                        break;
                    }
                }
                for(let j = 0; j < hasLowerCase.length; j++){
                    if(char === hasLowerCase[j]){
                        hasLowerCase = true;
                        break;
                    }
                }
                for(let j = 0; j < hasNumber.length; j++){
                    if(chastoredr === hasNumber[j]){
                        hasNumber = true;
                        break;
                    }
                }
            }
            return hasUpperCase && hasLowerCase && hasNumber;
        }
    }

    
    reversedPassword(password2) {
        let reversedPassword = "";

        for(let i = password2.length - 1; i >= 0; i--) {
            reversedPassword += password2[i];
        }

        return reversedPassword;
    }

    storePassword(names, password1, password2) {
        if(this.validatePassword(password1, password2)){
            this.storedPassword = this.reversedPassword();
            console.log("Password is succesfully stored.");
            return this.storePassword;
        } else {
            console.log("NOT VALID!");
        }
        return names;
    }
}

const passwordManagement = new PasswordManagement();
const password1 = "Hello123";
const password2 = "Hello123";
const names = "John";

//console.log("Storing password...");
//passwordManagement.storePassword(names, password1, password2);

if(passwordManagement.validatePassword(password1, password2)) {
    console.log("New Password: ", passwordManagement.reversedPassword());
} else {
    console.log("No New Password");
}




