describe('Pruebas de APIs - Demoblaze', () => {

    const username = `user_${Date.now()}`
    const password = '123456'
    const password_fallida = '1234567'


    it('Crear un nuevo usuario en signup', () => {
        cy.request({
            method: 'POST',
            url: 'https://api.demoblaze.com/signup',
            body: {
                username: username,
                password: password
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.errorMessage).to.not.exist

        })
    })

    it('Intentar crear un usuario ya existente', () => {
        cy.request({
            method: 'POST',
            url: 'https://api.demoblaze.com/signup',
            body: {
                username: username,
                password: password
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.errorMessage).to.include('exist')
        })
    })

    it('Login con usuario y password correctos', () => {
        cy.request({
            method: 'POST',
            url: 'https://api.demoblaze.com/login',
            body: {
                username: username,
                password: password
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.include('Auth_token')
            expect(response.body.errorMessage).to.not.exist

        })
    })

    it('Login con usuario y password incorrectos', () => {
        cy.request({
            method: 'POST',
            url: 'https://api.demoblaze.com/login',
            body: {
                username: username,
                password: password_fallida
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.errorMessage).to.exist
        })
    })

})
