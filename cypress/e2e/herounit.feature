Feature: Hero Unit
    Feature This feature is as part of the "homepage"

    Scenario: Can view the hero unit
        Given I am on the "homepage"
        When I see the "hero unit"
        Then I should see the "hero" "background image"

        Given I am viewing the "hero unit"
        When I view the "hero-header"
        Then I should see the "hero-header" "button"


