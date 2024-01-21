def alphabet_position(text):
    """Replaces alpha characters with their numeric position in the 
    alphabet."""
    alpha_only = [char for char in text.lower() if char.isalpha()]
    return ' '.join([str(ord(x) - 96) for x in alpha_only])