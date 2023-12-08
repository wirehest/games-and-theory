#! python3

import docx

def get_text(filename):
    doc = docx.Document(filename)
    fulltext = []
    for para in doc.paragraphs:
        fulltext.append(para.text)
        #fulltext.appent("\t" + para.text)      # Indent each paragraph.
    
    return "\n".join(fulltext)
    #return "\n\n".join(fullText)      # Double-spaces paragraphs.

    fullText.append('  ' + para.text)

