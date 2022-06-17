Feature: Hero Unit Structure
    Feature This feature is as part of the homepage

    Scenario: Hero Unit Structure matches the expected design
        Given I am on the homepage
        When I have scrolled to the hero unit
        Then the user should see the hero unit
        And the hero unit should have the following elements:
            | element                             | property         | value                                                             |
            | .hero-unit                          | padding          | 64px                                                              |
            | .hero-unit                          | margin           | 0px                                                               |
            | .hero-unit                          | background-color | rgba(0, 0, 0, 0)                                                  |
            | .hero-unit                          | background-image | url("http://localhost:8080/src/assets/forestroad.932fd69b..webp") |
            | .hero-unit > .header                | padding          | 64px                                                              |
            | .hero-unit > .header > .btn-primary | margin           | 0px                                                               |
            | .hero-unit > .header > .btn-primary | padding          | 16px                                                              |
            | .hero-unit > .header > .btn-primary | background-color | rgba(0, 0, 0, 0)                                                  |
            | .hero-unit > .header > .btn-primary | border-radius    | 8px                                                               |
            | .hero-unit > .header > .btn-primary | border-color     | rgb(255, 255, 255)                                                |
            | .hero-unit > .header > .btn-primary | border-style     | solid                                                             |
            | .hero-unit > .header > .btn-primary | border-width     | 1px                                                               |
            | .hero-unit > .header > .btn-primary | font-size        | 16px                                                              |
            | .hero-unit > .header > .btn-primary | font-weight      | 400                                                               |
            | .hero-unit > .header > .btn-primary | color            | rgb(255, 255, 255)                                                |
            | .hero-unit > .header > .btn-primary | text-decoration  | none                                                              |
            | .hero-unit > .grid-2                | display          | grid                                                              |
            | .hero-unit h1                       | font-size        | 32px                                                              |
            | .hero-unit h1                       | font-weight      | 700                                                               |
            | .hero-unit h1                       | color            | rgb(255, 255, 255)                                                |
            | .hero-unit h1                       | margin           | 0px                                                               |
            | .hero-unit h1                       | padding          | 0px                                                               |
            | .hero-unit h1                       | line-height      | 48px                                                              |
            | .hero-unit h1                       | font-family      | "Open Sans", sans-serif                                           |




