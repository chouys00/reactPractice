// onClick时需要的参数，要传进来
// class Item extends PureComponent {
//     render() {
//         const { id, text, selected, onClick } = this.props
//         return (
//             <li
//                 className={selected ? 'selected' : ''}
//                 onClick={onClick(id)}
//             >
//                 <span>{text}</span>
//             </li>
//         )
//     }
// }
//
// class List extends Component {
//     state = {
//         selected: null
//     }
//
//     handleClick(id) {
//         this.setState({selected: id})
//     }
//
//     render() {
//         const { items } = this.props
//         return (
//             <ul>
//                 {
//                     items.map((item, index) => {
//                         const {text, id} = item
//                         return (
//                             <Item
//                                 key={id}
//                                 id={id} // 传进去
//                                 selected={this.state.selected === id}
//                                 text={text}
//                                 onClick={this.handleClick}
//                             />
//                         )
//                     })
//                 }
//             </ul>
//         )
//     }
// }