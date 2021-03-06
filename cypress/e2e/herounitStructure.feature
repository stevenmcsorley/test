Feature: Hero Unit Structure
    Feature This feature is as part of the homepage

    Scenario: Hero Unit Structure matches the expected design
        Given I am on the homepage
        When I have scrolled to the hero unit
        Then the user should see the hero unit
        And the hero unit should have the following elements:
            | element                     | property         | value                                                   |
            | .hero-unit                  | padding          | 64px                                                    |
            | .hero-unit                  | margin           | 0px                                                     |
            | .hero-unit                  | background-color | rgba(0, 0, 0, 0)                                        |
            | .hero-unit                  | background-image | url("http://localhost:8080/src/assets/forestroad.webp") |
            | .hero-header                | padding          | 0px                                                     |
            | .hero-header > .btn-primary | margin           | 0px                                                     |
            | .hero-header > .btn-primary | padding          | 12.3077px 40px                                          |
            | .hero-header > .btn-primary | background-color | rgba(0, 0, 0, 0)                                        |
            | .hero-header > .btn-primary | border-radius    | 8px                                                     |
            | .hero-header > .btn-primary | border-color     | rgb(255, 255, 255)                                      |
            | .hero-header > .btn-primary | border-style     | solid                                                   |
            | .hero-header > .btn-primary | border-width     | 1px                                                     |
            | .hero-header > .btn-primary | font-size        | 16px                                                    |
            | .hero-header > .btn-primary | font-weight      | 400                                                     |
            | .hero-header > .btn-primary | color            | rgb(255, 255, 255)                                      |
            | .hero-header > .btn-primary | text-decoration  | none                                                    |
            | .hero-unit > .grid-2        | display          | grid                                                    |
            | .hero-unit h1               | font-size        | 40px                                                    |
            | .hero-unit h1               | font-weight      | 700                                                     |
            | .hero-unit h1               | color            | rgb(255, 255, 255)                                      |
            | .hero-unit h1               | margin           | 0px                                                     |
            | .hero-unit h1               | padding          | 0px                                                     |
            | .hero-unit h1               | line-height      | 60px                                                    |
            | .hero-unit h1               | font-family      | "Open Sans", sans-serif                                 |
            | .hero-unit p                | font-family      | "Open Sans", sans-serif                                 |
            | .hero-unit p                | font-size        | 16px                                                    |
            | .hero-unit p                | font-weight      | 400                                                     |
            | .hero-unit p                | color            | rgb(255, 255, 255)                                      |
            | .hero-unit p                | margin           | 0px                                                     |
            | .hero-unit p                | padding          | 0px                                                     |
            | .hero-unit p                | line-height      | 24px                                                    |





