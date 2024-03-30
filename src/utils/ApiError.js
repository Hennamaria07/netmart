class ApiError extends Error {
    constructor(
        statusCode,
        message = "Oops! something went wrong",
        errors = [],
        stack = ''
    ){
        super(message)
        this.statusCode = statusCode
        this.message = message
        this.data = null
        this.errors = errors
        this.success = false
        if (stack) {
            this.stack = stack
        } else{
            Error.captureStackTrace(this, this.constructor)
        }
        
    }
}

module.exports = ApiError;