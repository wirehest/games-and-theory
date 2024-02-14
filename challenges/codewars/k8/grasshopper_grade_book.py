def get_grade(s1, s2, s3):
    """Calculates an average grade and returns the equivalent letter
    grade.
    """
    mean = sum((s1, s2, s3)) / 3
    letter_grade = 'A'
    if mean < 60:
        letter_grade = 'F'
    elif mean < 70:
        letter_grade = 'D'
    elif mean < 80:
        letter_grade = 'C'
    elif mean < 90:
        letter_grade = 'B'

    return letter_grade