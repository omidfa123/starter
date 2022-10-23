<p align="center"><a href=""><img src="https://www.atramart.com/uploads/images/variables/atramart_logo.png" width="400"></a></p>

## Atramart Api Documentation
### [User]()
- ### [Create]()
    - [URL: ]() /api/v1/auth/register `#f03c15`
    - [Method: ]() POST
    - [Params]()
        - mobile
            - [validation]() ( required|numeric|regex:/(09)[0-9][0-9]/|digits:11|unique )
        - password and password_confirmation
            - [validation]() ( required|string|confirmed|min:8)
    - [Error Response]()
        - mobile is required
        - mobile is numeric
        - mobile format invalid
        - mobile number invalid
        - mobile is unique
        - password is required
        - password not mache
    - [Success Response]()
        - status => success
        - message => successfully send verify code
        - code => sms send code
- ### [Verify after send register data]()
    - [URL: ]() /api/v1/auth/verify
    - [Method: ]() POST
    - [Params]()
        - mobile
        - verify_code
            - [validation]() ( required)
    - [Error Response]()
        - verify code is required
        - invalid verify code
    - [Success Response]()
        - status => success,
        - message => User successfully registered,
        - user => User data,
        - token => token
- ### [Login]()
    - [URL: ]() /api/v1/auth/login
    - [Method: ]() POST
    - [type static]()
        - [Params]()
            - type
                - [value]() (static)
                - [validation]() ( required|string )
            - mobile
                - [validation]() ( required|numeric|regex:/(09)[0-9]{9}/|digits:11 )
            - password
                - [validation]() ( required|string|confirmed|min:8)
        - [Error Response]()
            - status => error,
            - message => Invalid Credentials,
        - [Success Response]()
            - status => success
            - message' => Login successful
            - token_type' => user
            - access_token' => token
            - expires_at => token expire date time
    - [type verify]()
        - [mode verify]()
            - [Params]()
                - mode
                    - [value]() (verify)
                    - [validation]() ( required|string )
                - mobile
                    - [validation]() ( required|numeric|regex:/(09)[0-9]{9}/|digits:11 )
            - [Error Response]()
                - status => error,
                - message => invalid verify code,
            - [Success Response]()
                - status => success
                - message' => successfully send verify code
        - [mode login]()
            - [Params]()
                - mode
                    - [value]() (login)
                    - [validation]() ( required|string )
                - mobile
                    - [validation]() ( required|numeric|regex:/(09)[0-9]{9}/|digits:11 )
                - code
                    - [validation]() ( required|numeric )
            - [Error Response]()
                - status => error,
                - message user login error => Invalid Credentials
                - message verify code => invalid verify code
                - message verify type key => Invalid type
                - message verify mode key =>  Invalid mode
                - message not exist user => user not exist
            - [Success Response]()
                - status => success
                - message' => successfully send verify code
- ### [Update]()
    - [URL: ]() /api/v1/user/user
    - [Method: ]() PATCH/PUT
    - [Params]()
        - id
        - mobile
            - [validation]() ( required|numeric|regex:/(09)[0-9][0-9]/|digits:11|unique )
        - first_name
            - [validation]() ( required|string )
        - last_name
            - [validation]() ( required|string )
        - telephone
            - [validation]() ( required|numeric|regex:/^0[0-9]{2,}[0-9]{7,}$/|digits:11|unique:users,telephone )
        - gender
            - [validation]() ( required )
        - national_code
            - [validation]() ( required )
        - email
          - [validation]() ( unique:users|regex:/(.+)@(.+)\.(.+)/i )
        - password and password_confirmation
            - [validation]() ( required|string|confirmed|min:8)
    - [Error Response]()
        - 'mail.regex => email is invalid
        - email.unique => email is unique,
        - first_name.required => first name is required
        - last_name.required => last name is required
        - telephone.required => telephone is required
        - national_code.required => national code is required
    - [Success Response]()
        - status => update
        - message => User successfully update
        - user => user info
- ### [Get]()
    - [URL: ]() /api/v1/user/user
    - [Method: ]() GET
    - [Params]()
        - id
    - [Success Response]()
        - status => success
        - message => Get successfully detail
        - user =>
            - detail
            - address
            - orders
            - wishlist
            - comments
            - wallet history
### [Address]()
- ### [Create]()
    - [URL: ]() /api/v1/user/address
    - [Method: ]() POST
    - [Params]()
        - name
            - [validation]() ( required)
        - mobile
            - [validation]() ( required|numeric|regex:/(09)[0-9]{9}/|digits:11 )
        - telephone
            - [validation]() ( required|numeric|regex:/^0[0-9]{2,}[0-9]{7,}$/|digits:11 )
        - post_code
            - [validation]() (required|numeric|regex:/^[0-9]{11}$/|digits:11)
        - city_id
            - [validation]() (required)
        - user_id
            - [validation]() ( required)
    - [Error Response]()
        - status => error,
        - message => Invalid validation Inputs,
    - [Success Response]()
        - status => success
        - message' => Address successfully created
        - address => Address collection
- ### [Update]()
    - [URL: ]() /api/v1/user/address/id
    - [Method: ]() PATCH/PUT
    - [Params]()
        - name
            - [validation]() ( required)
        - mobile
            - [validation]() ( required|numeric|regex:/(09)[0-9]{9}/|digits:11 )
        - telephone
            - [validation]() ( required|numeric|regex:/^0[0-9]{2,}[0-9]{7,}$/|digits:11 )
        - post_code
            - [validation]() (required|numeric|regex:/^[0-9]{11}$/|digits:11)
        - city_id
            - [validation]() (required)
        - user_id
            - [validation]() ( required)
    - [Error Response]()
        - status => error,
        - message => Invalid validation Inputs,
    - [Success Response]()
        - status => update
        - message' => Address successfully created
        - address => Address collection
- ### [Delete]()
    - [URL: ]() /api/v1/user/address/id
    - [Method: ]() DELETE
    - [Success Response]()
        - status => success
        - message => Address successfully remove
        - address => Address Collection | empty
       
