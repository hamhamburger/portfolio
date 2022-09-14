import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const rows = [
  {skill:"javascript",description:"昔からちょっとしたツール作成などに使っており,1番自信のある言語です。\nDouglasの本も読みました。\nクロージャなどの仕組みの部分から\nasync/awaitなどのモダンな機能まで理解しています。"},
  {skill:"react",description:"設計の基本や関数コンポーネント,\nhooksなどについては理解しています。\nただ複雑なフォームの設計などで\nコンポーネントの責務をどう分割していくか\nどこにステートを持たせるべきか\nなどの最適解は分かリません。\nhooksによるパフォーマンスの最適化も弱いです。\n便利なコンポーネントを使い\nそれっぽいサイトなら作れます。"},
  {skill:"ruby",description:"railsをやるために学びました。\nRuby3の機能や非同期処理などは分りません。"},
  {skill:"rails",description:"パーフェクトRuby on Railsと\nRuby on Rails 6 実践ガイド&機能拡張編という本で勉強しました。\n簡単なSNSなどであれば作成できます。\n自動購入botなどを作っていたのでe2eテストも書けます。\nrspecも同様です。"},
  {skill:"Java",description:"8年ほど前にあるライブラリを使うため\n基本的な文法を学習しただけですので自信はありません。\n"},
  {skill:"C++",description:"中学生の時、Effective C++やEssential C++などの名著を読み\nパソコン無しで勉強していました。\nこれがプログラミングを理解するベースになったと思いますが\nC++でゴリゴリ書けと言われたら無理です。"}
];



export default function SkillTable():JSX.Element {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor:"lavender"}}>
            <TableCell>技術</TableCell>
            <TableCell align="justify">できること</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.skill}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.skill}
                
              </TableCell>
              <TableCell align="justify" sx={{overflowWrap:"break-word"}}>
                
                  {row.description.split("\n").map((line,index) => <p style={{margin:"3px"}} key={index}>{line}</p>)}
                  
                
                
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
