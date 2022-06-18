Feature: Indusrty Structure
    Feature This feature is as part of the homepage

    Scenario: Indusrty Structure matches the expected design
        Given I am on the homepage
        When I have scrolled to the grid section
        Then the user should see the grid section
        And the grid section should have the following elements:
            | element                             | property              | value                                                    |
            | .grid-section                   | padding               | 64px                                                     |
            | .grid-section                   | margin                | 0px                                                      |
            | .grid-section                   | background-color      | rgb(233, 237, 240)                                       |
            | .grid-section                   | padding               | 64px                                                     |
            | .grid-section > select          | padding               | 8px                                                      |
            | .grid-section > select          | margin                | 0px                                                      |
            | .grid-section > select          | border                | 1px solid rgb(0, 0, 0)                                   |
            | .grid-section > select          | border-radius         | 5px                                                      |
            | .grid-section > select          | background-color      | rgb(255, 255, 255)                                       |
            | .grid-section > select          | color                 | rgb(0, 0, 0)                                             |
            | .grid-section > select          | font-size             | 16px                                                     |
            | .grid-section > .grid-3         | grid-gap              | 32px 32px                                                |
            | .grid-section > .grid-3         | grid-template-columns | 336px 336px 336px                                        |
            | .grid-section > .grid-3 > .card | background-image      | url("http://localhost:8080/src/assets/manufactor..webp") |
            | .grid-section > .grid-3 > .card | background-color      | rgb(67, 71, 82)                                          |
            | .grid-section > .grid-3 > .card | background-size       | cover                                                    |
            | .grid-section > .grid-3 > .card | background-position   | 50% 50%                                                  |
            | .grid-section > .grid-3 > .card | border-radius         | 4px                                                      |
            | .grid-section > .grid-3 > .card | padding               | 16px                                                     |
            | .grid-section > .grid-3 > .card | margin                | 0px                                                      |
            | .grid-3 [data-industry]             | background-blend-mode | overlay                                                  |
            | .grid-3 [data-industry]             | background-color      | rgb(67, 71, 82)                                          |
            | .grid-3 [data-industry]             | background-size       | cover                                                    |
            | .grid-3 [data-industry]             | background-position   | 50% 50%                                                  |
            | .card-header .badge                 | padding               | 8px 18px                                                 |
            | .card-header .badge                 | margin                | 0px                                                      |
            | .card-header .badge                 | border                | 2px solid rgba(100, 10, 12, 0.8)                         |
            | .card-header .badge                 | border-radius         | 4px                                                      |
            | .card-header .badge                 | color                 | rgb(255, 255, 255)                                       |
            | .card-header .badge                 | font-size             | 12px                                                     |
            | .card-header .badge                 | font-weight           | 700                                                      |
            | .card-header .badge                 | display               | inline-block                                             |










