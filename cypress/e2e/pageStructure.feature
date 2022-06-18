Feature: Page Structure
    Feature This feature is as part of the homepage

    Scenario: Page Structure matches the expected design
        Given I am on the homepage
        When I view the entire page
        Then I should see the following elements:
            | elements | class           |
            | Header   | .hero-unit      |
            | Grid     | .grid-section   |
            | CTA      | .cta-section    |
            | Main     | .main-section   |
            | Video    | .video-section  |
            | Footer   | .footer-section |