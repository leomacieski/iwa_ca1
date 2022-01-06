<?xml version="1.0"?> 
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template match="/">
    <table id="menuTable" border="1" class="indent">
        <thead>
            <tr>
                <th>Glass</th>
                <th>Ingredients</th>
                <th>How to Prepare</th>
            </tr>
        </thead>
        <tbody>
            <xsl:for-each select="//section">
            <tr>
                <td colspan="3">
                <xsl:value-of select="@name" />
                </td>
            </tr>
            <xsl:for-each select="type">
            <tr>
            <td>
                <xsl:value-of select="glass" />
                </td>
                <td>
                <xsl:value-of select="ingredients" />
                </td>
                <td align="right">
                    <xsl:value-of select="how2prepare" />
                </td>
            </tr>
            </xsl:for-each>
            </xsl:for-each>
        </tbody>
    </table>
</body>
</xsl:template>
</xsl:stylesheet>
