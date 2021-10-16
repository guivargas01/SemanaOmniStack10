const socket = require("./socket")
// @ponicode
describe("socket.subscribeToNewDevs", () => {
    test("0", () => {
        let callFunction = () => {
            socket.subscribeToNewDevs(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            socket.subscribeToNewDevs(9876)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            socket.subscribeToNewDevs("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            socket.subscribeToNewDevs("da7588892")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            socket.subscribeToNewDevs("c466a48309794261b64a4f02cfcc3d64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            socket.subscribeToNewDevs(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("socket.connect", () => {
    test("0", () => {
        let callFunction = () => {
            socket.connect(-75.3761, 12, "^5.0.0")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            socket.connect(-34.2524, 3.5005, "4.0.0-beta1\t")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            socket.connect(-75.3761, -53.2518, "^5.0.0")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            socket.connect(-75.3761, -53.2518, "1.0.0")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            socket.connect(-75.3761, 74.3939, "4.0.0-beta1\t")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            socket.connect(-Infinity, -Infinity, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("socket.disconnect", () => {
    test("0", () => {
        let callFunction = () => {
            socket.disconnect()
        }
    
        expect(callFunction).not.toThrow()
    })
})
