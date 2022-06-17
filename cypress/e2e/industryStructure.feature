Feature: Indusrty Structure
    Feature This feature is as part of the homepage

    Scenario: Indusrty Structure matches the expected design
        Given I am on the homepage
        When I have scrolled to the industry section
        Then the user should see the industry section
        And the industry section should have the following elements:
            | element                             | property              | value                                                    |
            | .industry-section                   | padding               | 64px                                                     |
            | .industry-section                   | margin                | 0px                                                      |
            | .industry-section                   | background-color      | rgb(233, 237, 240)                                       |
            | .industry-section                   | padding               | 64px                                                     |
            | .industry-section > select          | padding               | 8px                                                      |
            | .industry-section > select          | margin                | 0px                                                      |
            | .industry-section > select          | border                | 1px solid rgb(0, 0, 0)                                   |
            | .industry-section > select          | border-radius         | 5px                                                      |
            | .industry-section > select          | background-color      | rgb(255, 255, 255)                                       |
            | .industry-section > select          | color                 | rgb(0, 0, 0)                                             |
            | .industry-section > select          | font-size             | 16px                                                     |
            | .industry-section > .grid-3         | grid-gap              | 32px 32px                                                |
            | .industry-section > .grid-3         | grid-template-columns | 336px 336px 336px                                        |
            | .industry-section > .grid-3 > .card | background-image      | url("http://localhost:8080/src/assets/manufactor..webp") |
            | .industry-section > .grid-3 > .card | background-color      | rgb(67, 71, 82)                                          |
            | .industry-section > .grid-3 > .card | background-size       | cover                                                    |
            | .industry-section > .grid-3 > .card | background-position   | 50% 50%                                                  |
            | .industry-section > .grid-3 > .card | border-radius         | 4px                                                      |
            | .industry-section > .grid-3 > .card | padding               | 16px                                                     |
            | .industry-section > .grid-3 > .card | margin                | 0px                                                      |
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










