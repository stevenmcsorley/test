Feature: Filter Cards
    # In order to filter cards
    # As a user
    # I want to be able to filter cards by a specific attribute

    Scenario: Filter cards by attribute
        Given I have scrolled to the cards section
        When I filter cards by "aviation"
        Then I should see only cards with the "data-industry" attribute of "aviation"

