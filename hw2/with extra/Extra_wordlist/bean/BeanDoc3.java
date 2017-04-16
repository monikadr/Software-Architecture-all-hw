	ColumnBean() 
          Construct an instance of the ColumnBean.
protected	ColumnBean(boolean ignored, java.lang.String localName) 
          Construct an instance of the ColumnBean.
 
Method Summary
 DataObject	getColumnFormat() 
          Gets the formatting information for this column.
static DataObject	getColumnFormat(MutableUINode bean) 
          Gets the formatting information for this column.
 UINode	getColumnHeader() 
          Node to use to render this column header.
static UINode	getColumnHeader(MutableUINode bean) 
          Node to use to render this column header.
 DataObject	getColumnHeaderData() 
          Gets the data for this column's header.
static DataObject	getColumnHeaderData(MutableUINode bean) 
          Gets the data for this column's header.
 DataObject	getColumnHeaderFormat() 
          Gets the formatting information for this column's header.
static DataObject	getColumnHeaderFormat(MutableUINode bean) 
          Gets the formatting information for this column's header.
 UINode	getFooter() 
          Node to render as this column's footer.
static UINode	getFooter(MutableUINode bean) 
          Node to render as this column's footer.
 boolean	isNameTransformed() 
          Gets a boolean value indicating whether or not ColumnBean should block any name transformation when rendering data controls.
static boolean	isNameTransformed(MutableUINode bean) 
          Gets a boolean value indicating whether or not ColumnBean should block any name transformation when rendering data controls.
 boolean	isUseSeparateRows() 
          Gets If the children of this column should be rendered on separate rows, then set this attribute to true.
static boolean	isUseSeparateRows(MutableUINode bean) 
          Gets If the children of this column should be rendered on separate rows, then set this attribute to true.
 void	setColumnFormat(DataObject columnFormat) 
          Sets the formatting information for this column.
 void	setColumnFormat(DataObject columnFormat) 
          Deprecated. since 2.0; please use the non-deprecated version of this function.
static void	setColumnFormat(MutableUINode bean, DataObject columnFormat) 
          Sets the formatting information for this column.
static void	setColumnFormat(MutableUINode bean, DataObject columnFormat) 
          Deprecated. since 2.0; please use the non-deprecated version of this function.
static void	setColumnHeader(MutableUINode bean, UINode columnHeaderNode) 
          Node to use to render this column header.
 void	setColumnHeader(UINode columnHeaderNode) 
          Node to use to render this column header.
 void	setColumnHeaderData(DataObject columnHeaderData) 
          Sets the data for this column's header.
 void	setColumnHeaderData(DataObject columnHeaderData) 
          Deprecated. since 2.0; please use the non-deprecated version of this function.
static void	setColumnHeaderData(MutableUINode bean, DataObject columnHeaderData) 
          Sets the data for this column's header.
static void	setColumnHeaderData(MutableUINode bean, DataObject columnHeaderData) 
          Deprecated. since 2.0; please use the non-deprecated version of this function.
 void	setColumnHeaderFormat(DataObject columnHeaderFormat) 
          Sets the formatting information for this column's header.
 void	setColumnHeaderFormat(DataObject columnHeaderFormat) 
          Deprecated. since 2.0; please use the non-deprecated version of this function.
static void	setColumnHeaderFormat(MutableUINode bean, DataObject columnHeaderFormat) 
          Sets the formatting information for this column's header.
static void	setColumnHeaderFormat(MutableUINode bean, DataObject columnHeaderFormat) 
          Deprecated. since 2.0; please use the non-deprecated version of this function.
static void	setFooter(MutableUINode bean, UINode footerNode) 
          Node to render as this column's footer.
 void	setFooter(UINode footerNode) 
          Node to render as this column's footer.
 void	setNameTransformed(boolean nameTransformed) 
          Sets a boolean value indicating whether or not ColumnBean should block any name transformation when rendering data controls.
static void	setNameTransformed(MutableUINode bean, boolean nameTransformed) 
          Sets a boolean value indicating whether or not ColumnBean should block any name transformation when rendering data controls.
 void	setUseSeparateRows(boolean useSeparateRows) 
          Sets If the children of this column should be rendered on separate rows, then set this attribute to true.
static void	setUseSeparateRows(MutableUINode bean, boolean useSeparateRows) 
          Sets If the children of this column should be rendered on separate rows, then set this attribute to true.
 
Methods inherited from class oracle.cabo.ui.beans.MarlinBean
isEqualMarlinName
 
Methods inherited from class oracle.cabo.ui.beans.BaseWebBean
getDirection, getID, getID, getInlineStyle, getInlineStyle, getLanguage, getOnClick, getOnClick, getOnDoubleClick, getOnDoubleClick, getOnKeyDown, getOnKeyDown, getOnKeyPress, getOnKeyPress, getOnKeyUp, getOnKeyUp, getOnMouseDown, getOnMouseDown, getOnMouseMove, getOnMouseMove, getOnMouseOut, getOnMouseOut, getOnMouseOver, getOnMouseOver, getOnMouseUp, getOnMouseUp, getShortDesc, getShortDesc, getStyleClass, getStyleClass, isRendered, isRendered, resolveBoolean, resolveBoolean, resolveBoolean, resolveBoolean, resolveCharacter, resolveCharacter, resolveInteger, resolveInteger, resolveInteger, resolveInteger, resolveLong, resolveLong, resolveLong, resolveLong, resolveObject, resolveString, resolveString, setDirection, setID, setID, setInlineStyle, setInlineStyle, setLanguage, setOnClick, setOnClick, setOnDoubleClick, setOnDoubleClick, setOnKeyDown, setOnKeyDown, setOnKeyPress, setOnKeyPress, setOnKeyUp, setOnKeyUp, setOnMouseDown, setOnMouseDown, setOnMouseMove, setOnMouseMove, setOnMouseOut, setOnMouseOut, setOnMouseOver, setOnMouseOver, setOnMouseUp, setOnMouseUp, setRendered, setRendered, setShortDesc, setShortDesc, setStyleClass, setStyleClass
 
Methods inherited from class oracle.cabo.ui.BaseMutableUINode
addIndexedChild, addIndexedChild, addIndexedChild, addIndexedChildren, addIndexedChildren, clearIndexedChildren, createAttributeMap, createIndexedNodeList, createNamedChildMap, getAttributeMap, getAttributeMap, getAttributeValue, getAttributeValue, getIndexedChildCount, getIndexedNodeList, getIndexedNodeList, getNamedChildMap, getNamedChildMap, removeIndexedChild, replaceIndexedChild, setAttributeDictionary, setAttributeMap, setAttributeValue, setAttributeValue, setAttributeValue, setIndexedNodeList, setNamedChild, setNamedChildMap, setNodeID
 
Methods inherited from class oracle.cabo.ui.BaseUINode
getAttributeNames, getAttributeValue, getAttributeValueImpl, getChildArray, getChildNames, getIndexedChild, getIndexedChild, getIndexedChildCount, getLocalName, getNamedChild, getNamespaceURI, getNodeID, getNodeRole, getPreorderDescendentAttributeValue, getRawAttributeValue, getRenderedUINode, getRenderer, getRenderer, render, render, toString
 
Methods inherited from class oracle.cabo.ui.DeprecatedUINode
getAttributeValue, getChildNames, getNamedChild
 
Methods inherited from class java.lang.Object
clone, equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait
 
Methods inherited from interface oracle.cabo.ui.UINode
getAttributeNames, getAttributeValue, getAttributeValue, getChildNames, getChildNames, getIndexedChild, getIndexedChild, getIndexedChildCount, getLocalName, getNamedChild, getNamedChild, getNamespaceURI, getNodeID, getNodeRole, getRawAttributeValue, render, render
 

Constructor Detail

ColumnBean

public ColumnBean()
Construct an instance of the ColumnBean.
ColumnBean

protected ColumnBean(boolean ignored,
                     java.lang.String localName)
Construct an instance of the ColumnBean. Provided for subclasses that need distinct local names..
Method Detail
getColumnHeader

public final UINode getColumnHeader()
Node to use to render this column header.
setColumnHeader

public final void setColumnHeader(UINode columnHeaderNode)
Node to use to render this column header.
getFooter

public final UINode getFooter()
Node to render as this column's footer.
setFooter

public final void setFooter(UINode footerNode)
Node to render as this column's footer.
getColumnHeaderData

public final DataObject getColumnHeaderData()
Gets the data for this column's header.
setColumnHeaderData

public final void setColumnHeaderData(DataObject columnHeaderData)
Sets the data for this column's header.
setColumnHeaderData

public final void setColumnHeaderData(DataObject columnHeaderData)
Deprecated. since 2.0; please use the non-deprecated version of this function.
Sets the data for this column's header.
getColumnFormat

public final DataObject getColumnFormat()
Gets the formatting information for this column.
setColumnFormat

public final void setColumnFormat(DataObject columnFormat)
Sets the formatting information for this column.
setColumnFormat

public final void setColumnFormat(DataObject columnFormat)
Deprecated. since 2.0; please use the non-deprecated version of this function.
Sets the formatting information for this column.
getColumnHeaderFormat

public final DataObject getColumnHeaderFormat()
Gets the formatting information for this column's header.
setColumnHeaderFormat

public final void setColumnHeaderFormat(DataObject columnHeaderFormat)
Sets the formatting information for this column's header.
setColumnHeaderFormat

public final void setColumnHeaderFormat(DataObject columnHeaderFormat)
Deprecated. since 2.0; please use the non-deprecated version of this function.
Sets the formatting information for this column's header.
isNameTransformed

public final boolean isNameTransformed()
Gets a boolean value indicating whether or not ColumnBean should block any name transformation when rendering data controls. By default, the names are transformed, unless "nameTransformed" has already been set to false on the table. Columns cannot reenable name transformation if the table has disabled it.
setNameTransformed

public final void setNameTransformed(boolean nameTransformed)
Sets a boolean value indicating whether or not ColumnBean should block any name transformation when rendering data controls. By default, the names are transformed, unless "nameTransformed" has already been set to false on the table. Columns cannot reenable name transformation if the table has disabled it.
isUseSeparateRows

public final boolean isUseSeparateRows()
Gets If the children of this column should be rendered on separate rows, then set this attribute to true. This attribute is not supported on the following agent types: pda, phone, voice.
setUseSeparateRows

public final void setUseSeparateRows(boolean useSeparateRows)
Sets If the children of this column should be rendered on separate rows, then set this attribute to true. This attribute is not supported on the following agent types: pda, phone, voice.
getColumnHeader

public static UINode getColumnHeader(MutableUINode bean)
Node to use to render this column header.
setColumnHeader

public static void setColumnHeader(MutableUINode bean,
                                   UINode columnHeaderNode)
Node to use to render this column header.
getFooter

public static UINode getFooter(MutableUINode bean)
Node to render as this column's footer.
setFooter

public static void setFooter(MutableUINode bean,
                             UINode footerNode)
Node to render as this column's footer.
getColumnHeaderData

public static DataObject getColumnHeaderData(MutableUINode bean)
Gets the data for this column's header.
setColumnHeaderData

public static void setColumnHeaderData(MutableUINode bean,
                                       DataObject columnHeaderData)
Sets the data for this column's header.
setColumnHeaderData

public static void setColumnHeaderData(MutableUINode bean,
                                       DataObject columnHeaderData)
Deprecated. since 2.0; please use the non-deprecated version of this function.
Sets the data for this column's header.
getColumnFormat

public static DataObject getColumnFormat(MutableUINode bean)
Gets the formatting information for this column.
setColumnFormat

public static void setColumnFormat(MutableUINode bean,
                                   DataObject columnFormat)
Sets the formatting information for this column.
setColumnFormat

public static void setColumnFormat(MutableUINode bean,
                                   DataObject columnFormat)
Deprecated. since 2.0; please use the non-deprecated version of this function.
Sets the formatting information for this column.
getColumnHeaderFormat

public static DataObject getColumnHeaderFormat(MutableUINode bean)
Gets the formatting information for this column's header.
setColumnHeaderFormat

public static void setColumnHeaderFormat(MutableUINode bean,
                                         DataObject columnHeaderFormat)
Sets the formatting information for this column's header.
setColumnHeaderFormat

public static void setColumnHeaderFormat(MutableUINode bean,
                                         DataObject columnHeaderFormat)
Deprecated. since 2.0; please use the non-deprecated version of this function.
Sets the formatting information for this column's header.
isNameTransformed

public static boolean isNameTransformed(MutableUINode bean)
Gets a boolean value indicating whether or not ColumnBean should block any name transformation when rendering data controls. By default, the names are transformed, unless "nameTransformed" has already been set to false on the table. Columns cannot reenable name transformation if the table has disabled it.
setNameTransformed

public static void setNameTransformed(MutableUINode bean,
                                      boolean nameTransformed)
Sets a boolean value indicating whether or not ColumnBean should block any name transformation when rendering data controls. By default, the names are transformed, unless "nameTransformed" has already been set to false on the table. Columns cannot reenable name transformation if the table has disabled it.
isUseSeparateRows

public static boolean isUseSeparateRows(MutableUINode bean)
Gets If the children of this column should be rendered on separate rows, then set this attribute to true. This attribute is not supported on the following agent types: pda, phone, voice.
setUseSeparateRows

public static void setUseSeparateRows(MutableUINode bean,
                                      boolean useSeparateRows)
Sets If the children of this column should be rendered on separate rows, then set this attribute to true. This attribute is not supported on the following agent types: pda, phone, voice.
