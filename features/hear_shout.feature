Feature: Shout

    Shouty allows users to "hear" other users "shouts" as long as they are close enough to each other.

    To do:
    - only shout to people within a certain distance

    Background: 
        Given a person named Sean
        And a person named Lucy

    Rule: Shouts can only be heard by others
        Scenario: Listener hears a message
            When Sean shouts "free bagels at Sean's"
            Then Lucy hears Sean's message

        Scenario: Listener hears a different message
            When Sean shouts "Free coffee!"
            Then Lucy hears Sean's message

    Rule: Shouts can only be heard by others within a certain distance

        Scenario: Listener is within range
        # Given Lucy is located 15 metres from Sean # This set is not currently implemented


        Scenario: Listener is out of range