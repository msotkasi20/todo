class ApiError extends Error { //luokka perii Error-luokan ja määrittää constructorin, 
    constructor(message, status) { // johon parametreina virheviesti ja HTTP-tilakoodi
        super(message); // kutsuu Error-luokan konstruktoria
        this.status = status; // lisää itse HTTP-tilakoodin (401 tms.) virheeseen omana kenttänään
    }
}

export { ApiError }